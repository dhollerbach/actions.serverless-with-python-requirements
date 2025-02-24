import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_DeleteAccountAliasCommand, se_DeleteAccountAliasCommand } from "../protocols/Aws_query";
export { $Command };
export class DeleteAccountAliasCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSIdentityManagementV20100508", "DeleteAccountAlias", {})
    .n("IAMClient", "DeleteAccountAliasCommand")
    .f(void 0, void 0)
    .ser(se_DeleteAccountAliasCommand)
    .de(de_DeleteAccountAliasCommand)
    .build() {
}
