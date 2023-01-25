import AWS from "aws-sdk";
import config from "../config/envconfig"
const configObject = config()


const secretManagerConnection = async function () {
    return await new Promise(async (resolve, reject) => {
        try {
                AWS.config.update({ region: "ap-south-1" });
                const secretsManager = new AWS.SecretsManager();
                secretsManager.getSecretValue(
                    {
                        SecretId: configObject.secretId,
                    },
                    function (err, data) {
                        if (err) {
                            console.log("errrr->", err, err.stack);
                            resolve({ err: err });
                        } else {
                            const connectionCredentials = JSON.parse(data?.SecretString!);
                            console.log("--connectionCredentials",connectionCredentials)
                            resolve(connectionCredentials);
                        }

                    })
            
        } catch (error) {
            console.log("db connection error")
            reject();
        }
    }
    );
}

export default secretManagerConnection;