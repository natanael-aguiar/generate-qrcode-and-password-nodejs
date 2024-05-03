import chalk from "chalk";

const promptQRCode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para gerar o QR code"),
    },
    {
        name: "type",
        description: chalk.yellow("Escolha entre o tipo (1 - normal ou 2 - terminal)"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 ou 2"),
        required: true
    }
];

export default promptQRCode;