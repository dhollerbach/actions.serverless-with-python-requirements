import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_UntagUserCommand, se_UntagUserCommand } from "../protocols/Aws_query";
export { $Command };
export class UntagUserCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSIdentityManagementV20100508", "UntagUser", {})
    .n("IAMClient", "UntagUserCommand")
    .f(void 0, void 0)
    .ser(se_UntagUserCommand)
    .de(de_UntagUserCommand)
    .build() {
}
