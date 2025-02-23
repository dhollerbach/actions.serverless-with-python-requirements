import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_ListSigningCertificatesCommand, se_ListSigningCertificatesCommand } from "../protocols/Aws_query";
export { $Command };
export class ListSigningCertificatesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSIdentityManagementV20100508", "ListSigningCertificates", {})
    .n("IAMClient", "ListSigningCertificatesCommand")
    .f(void 0, void 0)
    .ser(se_ListSigningCertificatesCommand)
    .de(de_ListSigningCertificatesCommand)
    .build() {
}
