import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_ListOpenIDConnectProvidersCommand, se_ListOpenIDConnectProvidersCommand } from "../protocols/Aws_query";
export { $Command };
export class ListOpenIDConnectProvidersCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSIdentityManagementV20100508", "ListOpenIDConnectProviders", {})
    .n("IAMClient", "ListOpenIDConnectProvidersCommand")
    .f(void 0, void 0)
    .ser(se_ListOpenIDConnectProvidersCommand)
    .de(de_ListOpenIDConnectProvidersCommand)
    .build() {
}
