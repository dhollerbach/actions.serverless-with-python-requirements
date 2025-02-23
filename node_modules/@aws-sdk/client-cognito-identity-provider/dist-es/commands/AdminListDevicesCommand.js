import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AdminListDevicesRequestFilterSensitiveLog, AdminListDevicesResponseFilterSensitiveLog, } from "../models/models_0";
import { de_AdminListDevicesCommand, se_AdminListDevicesCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class AdminListDevicesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "AdminListDevices", {})
    .n("CognitoIdentityProviderClient", "AdminListDevicesCommand")
    .f(AdminListDevicesRequestFilterSensitiveLog, AdminListDevicesResponseFilterSensitiveLog)
    .ser(se_AdminListDevicesCommand)
    .de(de_AdminListDevicesCommand)
    .build() {
}
