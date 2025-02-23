import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ConfirmDeviceRequestFilterSensitiveLog, } from "../models/models_0";
import { de_ConfirmDeviceCommand, se_ConfirmDeviceCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class ConfirmDeviceCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "ConfirmDevice", {})
    .n("CognitoIdentityProviderClient", "ConfirmDeviceCommand")
    .f(ConfirmDeviceRequestFilterSensitiveLog, void 0)
    .ser(se_ConfirmDeviceCommand)
    .de(de_ConfirmDeviceCommand)
    .build() {
}
