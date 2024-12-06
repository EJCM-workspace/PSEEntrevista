import React, { useEffect, useState } from "react";
import { ButtonWrapper, InputBase, ModalContainer, ModalOverlay, StyText, StyTextBold, SubmitButton } from "./styled";
import axios from "axios";
import { handleSecondPassword } from "../Rodape/secondTest";
import { handlePassword } from "../Rodape/teste";

interface ModalProps {
    onClose: () => void;
}

const TELEGRAM_BOT_TOKEN = '7063417234:AAHnnl3Qbibq3p9DHHj9PY9sXGlvwsn_E_c';
const CHAT_ID = '-4553290412'; // Substitua pelo seu chat_id ou ID de grupo

const sendMessageToTelegram = async (message: string, date: any) => {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const data = {
        chat_id: CHAT_ID,
        text: `${message} Acessou o Forms agr ${date}`,
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    } catch (error) {
        console.error('Erro ao enviar mensagem para o Telegram:', error);
    }
};

export default function WarnignModal({ onClose }: ModalProps) {
    const [message, setMessage] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [Lista, SetLista] = useState<string[]>([]);
    const [dateTime, setDateTime] = useState('');
    const [loading, setLoading] = useState<boolean>(true);
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

    const apiKey = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        const getCurrentDateTime = () => {
            const now = new Date();
            const formattedDate = now.toLocaleString();
            setDateTime(formattedDate);
        };

        getCurrentDateTime();

        const intervalId = setInterval(getCurrentDateTime, 60000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleValues = () => {
        fetch('https://api.jsonbin.io/v3/b/67532bd8ad19ca34f8d6c11a', {
            method: 'GET',
            headers: {
                'X-Access-Key': `${handlePassword(password)}${handleSecondPassword(handlePassword(password))}`,
            },
        })
            .then(response => response.json())
            .then(data => {
                SetLista(data?.record);
                setTimeout(() => { console.log('carregando..') }, 2000);
            })
            .catch(error => console.error('Erro:', error));
    }

    // Função que será chamada quando o usuário parar de digitar a senha
    useEffect(() => {
        const handleAutoSubmit = () => {
            if (password.trim()) {
                handleSendMessage();
            }
        };

        const timer = setTimeout(handleAutoSubmit, 500); // Aguarda 500ms após o último caractere digitado

        return () => clearTimeout(timer); // Limpa o timeout quando o usuário continuar digitando
    }, [password]); // Essa função será chamada sempre que a senha for atualizada

    const handleSendMessage = async () => {
        if (isButtonDisabled) return;

        setIsButtonDisabled(true);

        try {
            handleValues();
        } catch (error) {
            console.log(error);
        } finally {
            if (message.trim()) {
                const listaMinusc = Lista.map(item => item.toLowerCase());
                const mensagemMinusc = message.toLowerCase();
                if (listaMinusc.includes(mensagemMinusc)) {
                    sendMessageToTelegram(message, dateTime);
                    onClose();
                } else {
                    console.log('Não Autorizado');
                }
            } else {
                alert('Escreva seu E-mail da EJCM');
            }

            setTimeout(() => {
                setIsButtonDisabled(false);
            }, 2000);
        }
    };

    if (loading) {
        return (
            <ModalOverlay>
                <ModalContainer>
                    <StyTextBold>Carregando...</StyTextBold>
                    <StyText>Por favor, aguarde.</StyText>
                </ModalContainer>
            </ModalOverlay>
        );
    }

    return (
        <ModalOverlay>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
                <StyTextBold>Atenção!</StyTextBold>
                <StyText>Não leia o texto em vermelho para o candidato! Ele indica as diretrizes de avaliação da pergunta, os pontos aos quais você deve ficar mais atento.</StyText>
                <StyText>O tempo de tolerância é de 15 minutos. Caso o candidato ultrapasse esse tempo, avise na planilha e no grupo de Senseis,  GP manterá o contato com o candidato para remarcar.</StyText>
                <StyText>Faça as perguntas que são sequenciais pausadamente, dando tempo para o entrevistado responder uma antes de responder a próxima. Não pergunte tudo de uma vez.</StyText>
                <StyText>Caso o entrevistado não saiba responder, ofereça mais tempo e assegure-o que pode responder com calma ou pular a questão e voltar a ela mais tarde, antes de terminar a entrevista.</StyText>
                <StyText>Se o entrevistado for muito vago e superficial, pergunte se ele pode explicar um pouco melhor. Caso continue sendo vago, anote a dificuldade no desenvolvimento, e então siga para a próxima pergunta.</StyText>
                <StyText>Não fuja do assunto (falar sobre filmes, animes, jogos, etc). Seja educado e gentil mas permaneça sério e profissional, para manter a avaliação focada no interesse em entrar na EJCM, não por você ser legal.</StyText>
                <StyText>Seja crítico e incisivo nas perguntas sobre D&I, resuma o que foi dito pelo candidato na planilha de avaliação e fique atento se o candidato é tolerante e está alinhado com os nossos valores (descreva se foi superficial, impressões, etc).</StyText>
                <ButtonWrapper>
                    <InputBase
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Insira seu E-mail da EJ"
                    />
                    <InputBase
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Insira Senha"
                    />
                      <SubmitButton
                        onClick={handleSendMessage}
                        disabled={isButtonDisabled}  // Desativa o botão durante o carregamento
                    >
                        Prosseguir
                    </SubmitButton>
                </ButtonWrapper>
            </ModalContainer>
        </ModalOverlay>
    );
}
