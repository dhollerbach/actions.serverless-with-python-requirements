import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateAuthEventFeedbackRequestFilterSensitiveLog, } from "../models/models_1";
import { de_UpdateAuthEventFeedbackCommand, se_UpdateAuthEventFeedbackCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class UpdateAuthEventFeedbackCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "UpdateAuthEventFeedback", {})
    .n("CognitoIdentityProviderClient", "UpdateAuthEventFeedbackCommand")
    .f(UpdateAuthEventFeedbackRequestFilterSensitiveLog, void 0)
    .ser(se_UpdateAuthEventFeedbackCommand)
    .de(de_UpdateAuthEventFeedbackCommand)
    .build() {
}
