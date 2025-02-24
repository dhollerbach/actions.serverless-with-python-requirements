import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_ListInstanceProfilesCommand, se_ListInstanceProfilesCommand } from "../protocols/Aws_query";
export { $Command };
export class ListInstanceProfilesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSIdentityManagementV20100508", "ListInstanceProfiles", {})
    .n("IAMClient", "ListInstanceProfilesCommand")
    .f(void 0, void 0)
    .ser(se_ListInstanceProfilesCommand)
    .de(de_ListInstanceProfilesCommand)
    .build() {
}
