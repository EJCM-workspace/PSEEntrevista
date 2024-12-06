export const handlePassword = (senha: string) => {
    if (senha === 'EJCM2025') {
        return '$2a$10$N5q9QPOU.PVPO9/';
    } else if (senha === 'PSE2025') {
        return '$2a$10$XjZ3tLhb6y18U';
    } else if (senha === 'EJCM_Selecao') {
        return '$2a$10$5VszyRuCm6ZK2kgP9m/';
    } else if (senha === 'ProcessoSeletivo2025') {
        return '$2a$10$JZovm00kT3V1YzFs/';
    } else if (senha === 'EJCM_Equipe') {
        return '$2a$10$uZ3I6JcHz2cyw.nz/';
    } else if (senha === 'Selecao_PSE') {
        return '$2a$10$QRY6CIVIn7lXANczU/';
    } else if (senha === 'EJCM_Aluno') {
        return '$2a$10$7eMFEi8CV9UsIE1b/';
    } else if (senha === 'PSE_Inscricao') {
        return '$2a$10$4DhR2tZXfZ4kaVgbx/';
    } else if (senha === 'EJCM_Fase1') {
        return '$2a$10$1c9l1g5ZPxg/XX6zqYz/';
    } else if (senha === 'EJCM_Fase2') {
        return '$2a$10$4XZpOJlfsWIjzH5xF/';
    } else if (senha === 'PSE_2025') {
        return '$2a$10$UpckBJLMFhs/';
    } else if (senha === 'Selecao_PSE_Inscricao') {
        return '$2a$10$zjV0kq9DPW3fHgM/';
    } else if (senha === 'EJCM_Palestra') {
        return '$2a$10$3Vy0uKb8kkM0AewG/';
    } else if (senha === 'ProcessoSeletivo_Resultado') {
        return '$2a$10$Qm2cyoRX2ZBpAl3l6Pb1/';
    } else if (senha === 'EJCM_Desafio') {
        return '$2a$10$7lHf0c0hdXNKq8BcmAm/';
    } else if (senha === 'PSE_Orientacao') {
        return '$2a$10$ZRjxOZRzyALc8.WlS/';
    } else {
        return 'Senha inválida';
    }
};
