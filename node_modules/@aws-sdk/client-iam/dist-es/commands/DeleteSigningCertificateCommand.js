import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_DeleteSigningCertificateCommand, se_DeleteSigningCertificateCommand } from "../protocols/Aws_query";
export { $Command };
export class DeleteSigningCertificateCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSIdentityManagementV20100508", "DeleteSigningCertificate", {})
    .n("IAMClient", "DeleteSigningCertificateCommand")
    .f(void 0, void 0)
    .ser(se_DeleteSigningCertificateCommand)
    .de(de_DeleteSigningCertificateCommand)
    .build() {
}
