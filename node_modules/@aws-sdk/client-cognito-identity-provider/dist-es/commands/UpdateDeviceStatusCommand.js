import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateDeviceStatusRequestFilterSensitiveLog, } from "../models/models_1";
import { de_UpdateDeviceStatusCommand, se_UpdateDeviceStatusCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class UpdateDeviceStatusCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "UpdateDeviceStatus", {})
    .n("CognitoIdentityProviderClient", "UpdateDeviceStatusCommand")
    .f(UpdateDeviceStatusRequestFilterSensitiveLog, void 0)
    .ser(se_UpdateDeviceStatusCommand)
    .de(de_UpdateDeviceStatusCommand)
    .build() {
}
