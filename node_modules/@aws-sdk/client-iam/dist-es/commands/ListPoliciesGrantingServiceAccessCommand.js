import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_ListPoliciesGrantingServiceAccessCommand, se_ListPoliciesGrantingServiceAccessCommand, } from "../protocols/Aws_query";
export { $Command };
export class ListPoliciesGrantingServiceAccessCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSIdentityManagementV20100508", "ListPoliciesGrantingServiceAccess", {})
    .n("IAMClient", "ListPoliciesGrantingServiceAccessCommand")
    .f(void 0, void 0)
    .ser(se_ListPoliciesGrantingServiceAccessCommand)
    .de(de_ListPoliciesGrantingServiceAccessCommand)
    .build() {
}
