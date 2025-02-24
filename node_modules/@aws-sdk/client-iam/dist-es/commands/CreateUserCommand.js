import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_CreateUserCommand, se_CreateUserCommand } from "../protocols/Aws_query";
export { $Command };
export class CreateUserCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSIdentityManagementV20100508", "CreateUser", {})
    .n("IAMClient", "CreateUserCommand")
    .f(void 0, void 0)
    .ser(se_CreateUserCommand)
    .de(de_CreateUserCommand)
    .build() {
}
