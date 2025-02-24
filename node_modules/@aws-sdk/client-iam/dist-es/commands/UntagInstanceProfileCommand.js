import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_UntagInstanceProfileCommand, se_UntagInstanceProfileCommand } from "../protocols/Aws_query";
export { $Command };
export class UntagInstanceProfileCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSIdentityManagementV20100508", "UntagInstanceProfile", {})
    .n("IAMClient", "UntagInstanceProfileCommand")
    .f(void 0, void 0)
    .ser(se_UntagInstanceProfileCommand)
    .de(de_UntagInstanceProfileCommand)
    .build() {
}
