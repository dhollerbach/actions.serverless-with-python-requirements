import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ResetServiceSpecificCredentialResponseFilterSensitiveLog, } from "../models/models_0";
import { de_ResetServiceSpecificCredentialCommand, se_ResetServiceSpecificCredentialCommand, } from "../protocols/Aws_query";
export { $Command };
export class ResetServiceSpecificCredentialCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSIdentityManagementV20100508", "ResetServiceSpecificCredential", {})
    .n("IAMClient", "ResetServiceSpecificCredentialCommand")
    .f(void 0, ResetServiceSpecificCredentialResponseFilterSensitiveLog)
    .ser(se_ResetServiceSpecificCredentialCommand)
    .de(de_ResetServiceSpecificCredentialCommand)
    .build() {
}
