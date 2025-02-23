import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_GenerateCredentialReportCommand, se_GenerateCredentialReportCommand } from "../protocols/Aws_query";
export { $Command };
export class GenerateCredentialReportCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSIdentityManagementV20100508", "GenerateCredentialReport", {})
    .n("IAMClient", "GenerateCredentialReportCommand")
    .f(void 0, void 0)
    .ser(se_GenerateCredentialReportCommand)
    .de(de_GenerateCredentialReportCommand)
    .build() {
}
