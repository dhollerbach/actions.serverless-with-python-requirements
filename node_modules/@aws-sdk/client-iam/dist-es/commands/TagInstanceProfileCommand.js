import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_TagInstanceProfileCommand, se_TagInstanceProfileCommand } from "../protocols/Aws_query";
export { $Command };
export class TagInstanceProfileCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSIdentityManagementV20100508", "TagInstanceProfile", {})
    .n("IAMClient", "TagInstanceProfileCommand")
    .f(void 0, void 0)
    .ser(se_TagInstanceProfileCommand)
    .de(de_TagInstanceProfileCommand)
    .build() {
}
