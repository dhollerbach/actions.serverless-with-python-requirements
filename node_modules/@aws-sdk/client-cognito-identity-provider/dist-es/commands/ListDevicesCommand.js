import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListDevicesRequestFilterSensitiveLog, ListDevicesResponseFilterSensitiveLog, } from "../models/models_1";
import { de_ListDevicesCommand, se_ListDevicesCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class ListDevicesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "ListDevices", {})
    .n("CognitoIdentityProviderClient", "ListDevicesCommand")
    .f(ListDevicesRequestFilterSensitiveLog, ListDevicesResponseFilterSensitiveLog)
    .ser(se_ListDevicesCommand)
    .de(de_ListDevicesCommand)
    .build() {
}
