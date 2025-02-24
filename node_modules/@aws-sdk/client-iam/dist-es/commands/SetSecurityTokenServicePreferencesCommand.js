import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_SetSecurityTokenServicePreferencesCommand, se_SetSecurityTokenServicePreferencesCommand, } from "../protocols/Aws_query";
export { $Command };
export class SetSecurityTokenServicePreferencesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSIdentityManagementV20100508", "SetSecurityTokenServicePreferences", {})
    .n("IAMClient", "SetSecurityTokenServicePreferencesCommand")
    .f(void 0, void 0)
    .ser(se_SetSecurityTokenServicePreferencesCommand)
    .de(de_SetSecurityTokenServicePreferencesCommand)
    .build() {
}
