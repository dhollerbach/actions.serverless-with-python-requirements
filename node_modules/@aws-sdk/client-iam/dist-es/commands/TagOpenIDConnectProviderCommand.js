import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_TagOpenIDConnectProviderCommand, se_TagOpenIDConnectProviderCommand } from "../protocols/Aws_query";
export { $Command };
export class TagOpenIDConnectProviderCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSIdentityManagementV20100508", "TagOpenIDConnectProvider", {})
    .n("IAMClient", "TagOpenIDConnectProviderCommand")
    .f(void 0, void 0)
    .ser(se_TagOpenIDConnectProviderCommand)
    .de(de_TagOpenIDConnectProviderCommand)
    .build() {
}
