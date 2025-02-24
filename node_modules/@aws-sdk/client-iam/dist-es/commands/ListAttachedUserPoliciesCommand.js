import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_ListAttachedUserPoliciesCommand, se_ListAttachedUserPoliciesCommand } from "../protocols/Aws_query";
export { $Command };
export class ListAttachedUserPoliciesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSIdentityManagementV20100508", "ListAttachedUserPolicies", {})
    .n("IAMClient", "ListAttachedUserPoliciesCommand")
    .f(void 0, void 0)
    .ser(se_ListAttachedUserPoliciesCommand)
    .de(de_ListAttachedUserPoliciesCommand)
    .build() {
}
