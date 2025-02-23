import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_ListSAMLProvidersCommand, se_ListSAMLProvidersCommand } from "../protocols/Aws_query";
export { $Command };
export class ListSAMLProvidersCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSIdentityManagementV20100508", "ListSAMLProviders", {})
    .n("IAMClient", "ListSAMLProvidersCommand")
    .f(void 0, void 0)
    .ser(se_ListSAMLProvidersCommand)
    .de(de_ListSAMLProvidersCommand)
    .build() {
}
