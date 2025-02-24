import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListUsersResponseFilterSensitiveLog } from "../models/models_1";
import { de_ListUsersCommand, se_ListUsersCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class ListUsersCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "ListUsers", {})
    .n("CognitoIdentityProviderClient", "ListUsersCommand")
    .f(void 0, ListUsersResponseFilterSensitiveLog)
    .ser(se_ListUsersCommand)
    .de(de_ListUsersCommand)
    .build() {
}
