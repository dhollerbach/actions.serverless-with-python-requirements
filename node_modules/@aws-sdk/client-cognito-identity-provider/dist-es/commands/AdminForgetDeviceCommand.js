import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AdminForgetDeviceRequestFilterSensitiveLog } from "../models/models_0";
import { de_AdminForgetDeviceCommand, se_AdminForgetDeviceCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class AdminForgetDeviceCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "AdminForgetDevice", {})
    .n("CognitoIdentityProviderClient", "AdminForgetDeviceCommand")
    .f(AdminForgetDeviceRequestFilterSensitiveLog, void 0)
    .ser(se_AdminForgetDeviceCommand)
    .de(de_AdminForgetDeviceCommand)
    .build() {
}
