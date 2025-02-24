import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_UpdateSigningCertificateCommand, se_UpdateSigningCertificateCommand } from "../protocols/Aws_query";
export { $Command };
export class UpdateSigningCertificateCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSIdentityManagementV20100508", "UpdateSigningCertificate", {})
    .n("IAMClient", "UpdateSigningCertificateCommand")
    .f(void 0, void 0)
    .ser(se_UpdateSigningCertificateCommand)
    .de(de_UpdateSigningCertificateCommand)
    .build() {
}
