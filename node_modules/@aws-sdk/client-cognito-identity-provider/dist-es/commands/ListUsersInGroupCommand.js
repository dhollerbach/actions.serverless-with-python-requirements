import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListUsersInGroupResponseFilterSensitiveLog, } from "../models/models_1";
import { de_ListUsersInGroupCommand, se_ListUsersInGroupCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class ListUsersInGroupCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "ListUsersInGroup", {})
    .n("CognitoIdentityProviderClient", "ListUsersInGroupCommand")
    .f(void 0, ListUsersInGroupResponseFilterSensitiveLog)
    .ser(se_ListUsersInGroupCommand)
    .de(de_ListUsersInGroupCommand)
    .build() {
}
