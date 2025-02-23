import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AdminUpdateDeviceStatusRequestFilterSensitiveLog, } from "../models/models_0";
import { de_AdminUpdateDeviceStatusCommand, se_AdminUpdateDeviceStatusCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class AdminUpdateDeviceStatusCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "AdminUpdateDeviceStatus", {})
    .n("CognitoIdentityProviderClient", "AdminUpdateDeviceStatusCommand")
    .f(AdminUpdateDeviceStatusRequestFilterSensitiveLog, void 0)
    .ser(se_AdminUpdateDeviceStatusCommand)
    .de(de_AdminUpdateDeviceStatusCommand)
    .build() {
}
