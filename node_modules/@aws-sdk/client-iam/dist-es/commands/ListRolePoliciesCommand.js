import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_ListRolePoliciesCommand, se_ListRolePoliciesCommand } from "../protocols/Aws_query";
export { $Command };
export class ListRolePoliciesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSIdentityManagementV20100508", "ListRolePolicies", {})
    .n("IAMClient", "ListRolePoliciesCommand")
    .f(void 0, void 0)
    .ser(se_ListRolePoliciesCommand)
    .de(de_ListRolePoliciesCommand)
    .build() {
}
