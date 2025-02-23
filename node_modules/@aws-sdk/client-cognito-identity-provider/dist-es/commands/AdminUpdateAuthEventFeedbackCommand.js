import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AdminUpdateAuthEventFeedbackRequestFilterSensitiveLog, } from "../models/models_0";
import { de_AdminUpdateAuthEventFeedbackCommand, se_AdminUpdateAuthEventFeedbackCommand, } from "../protocols/Aws_json1_1";
export { $Command };
export class AdminUpdateAuthEventFeedbackCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "AdminUpdateAuthEventFeedback", {})
    .n("CognitoIdentityProviderClient", "AdminUpdateAuthEventFeedbackCommand")
    .f(AdminUpdateAuthEventFeedbackRequestFilterSensitiveLog, void 0)
    .ser(se_AdminUpdateAuthEventFeedbackCommand)
    .de(de_AdminUpdateAuthEventFeedbackCommand)
    .build() {
}
