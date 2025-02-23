import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_ListResourceServersCommand, se_ListResourceServersCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class ListResourceServersCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "ListResourceServers", {})
    .n("CognitoIdentityProviderClient", "ListResourceServersCommand")
    .f(void 0, void 0)
    .ser(se_ListResourceServersCommand)
    .de(de_ListResourceServersCommand)
    .build() {
}
