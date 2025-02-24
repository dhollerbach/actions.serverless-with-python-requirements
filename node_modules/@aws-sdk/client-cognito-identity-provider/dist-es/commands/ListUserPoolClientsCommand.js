import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListUserPoolClientsResponseFilterSensitiveLog, } from "../models/models_1";
import { de_ListUserPoolClientsCommand, se_ListUserPoolClientsCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class ListUserPoolClientsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityProviderService", "ListUserPoolClients", {})
    .n("CognitoIdentityProviderClient", "ListUserPoolClientsCommand")
    .f(void 0, ListUserPoolClientsResponseFilterSensitiveLog)
    .ser(se_ListUserPoolClientsCommand)
    .de(de_ListUserPoolClientsCommand)
    .build() {
}
