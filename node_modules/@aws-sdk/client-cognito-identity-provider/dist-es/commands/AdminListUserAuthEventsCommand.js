import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AdminListUserAuthEventsRequestFilterSensitiveLog, } from "../models/models_0";
import { de_AdminListUserAuthEventsCommand, se_AdminListUserAuthEventsCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class AdminListUserAuthEventsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "AdminListUserAuthEvents", {})
    .n("CognitoIdentityProviderClient", "AdminListUserAuthEventsCommand")
    .f(AdminListUserAuthEventsRequestFilterSensitiveLog, void 0)
    .ser(se_AdminListUserAuthEventsCommand)
    .de(de_AdminListUserAuthEventsCommand)
    .build() {
}
