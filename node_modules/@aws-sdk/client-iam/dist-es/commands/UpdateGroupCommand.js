import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_UpdateGroupCommand, se_UpdateGroupCommand } from "../protocols/Aws_query";
export { $Command };
export class UpdateGroupCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSIdentityManagementV20100508", "UpdateGroup", {})
    .n("IAMClient", "UpdateGroupCommand")
    .f(void 0, void 0)
    .ser(se_UpdateGroupCommand)
    .de(de_UpdateGroupCommand)
    .build() {
}
