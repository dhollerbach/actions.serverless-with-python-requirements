import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_UpdateServerCertificateCommand, se_UpdateServerCertificateCommand } from "../protocols/Aws_query";
export { $Command };
export class UpdateServerCertificateCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSIdentityManagementV20100508", "UpdateServerCertificate", {})
    .n("IAMClient", "UpdateServerCertificateCommand")
    .f(void 0, void 0)
    .ser(se_UpdateServerCertificateCommand)
    .de(de_UpdateServerCertificateCommand)
    .build() {
}
