import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_GetUserCommand, se_GetUserCommand } from "../protocols/Aws_query";
export { $Command };
export class GetUserCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSIdentityManagementV20100508", "GetUser", {})
    .n("IAMClient", "GetUserCommand")
    .f(void 0, void 0)
    .ser(se_GetUserCommand)
    .de(de_GetUserCommand)
    .build() {
}
