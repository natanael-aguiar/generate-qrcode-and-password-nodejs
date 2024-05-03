import chalk from "chalk";
import qr from "qrcode-terminal";

async function handle (err, result){
    if(err){
        console.log("Error na aplicação");
        return;
    }
    const isSmall = result.type === 2;
    qr.generate(result.link, {small: isSmall}, (qrcode) => {
        chalk.green("QR Code gerado com sucesso: ");
        console.log(qrcode);
    });
    
}

export default handle;