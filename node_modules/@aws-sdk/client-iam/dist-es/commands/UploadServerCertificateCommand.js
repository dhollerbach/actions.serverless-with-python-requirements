import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { UploadServerCertificateRequestFilterSensitiveLog, } from "../models/models_1";
import { de_UploadServerCertificateCommand, se_UploadServerCertificateCommand } from "../protocols/Aws_query";
export { $Command };
export class UploadServerCertificateCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSIdentityManagementV20100508", "UploadServerCertificate", {})
    .n("IAMClient", "UploadServerCertificateCommand")
    .f(UploadServerCertificateRequestFilterSensitiveLog, void 0)
    .ser(se_UploadServerCertificateCommand)
    .de(de_UploadServerCertificateCommand)
    .build() {
}
