import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_GetSAMLProviderCommand, se_GetSAMLProviderCommand } from "../protocols/Aws_query";
export { $Command };
export class GetSAMLProviderCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSIdentityManagementV20100508", "GetSAMLProvider", {})
    .n("IAMClient", "GetSAMLProviderCommand")
    .f(void 0, void 0)
    .ser(se_GetSAMLProviderCommand)
    .de(de_GetSAMLProviderCommand)
    .build() {
}
