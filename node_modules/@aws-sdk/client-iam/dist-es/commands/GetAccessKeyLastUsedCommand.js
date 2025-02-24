import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_GetAccessKeyLastUsedCommand, se_GetAccessKeyLastUsedCommand } from "../protocols/Aws_query";
export { $Command };
export class GetAccessKeyLastUsedCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSIdentityManagementV20100508", "GetAccessKeyLastUsed", {})
    .n("IAMClient", "GetAccessKeyLastUsedCommand")
    .f(void 0, void 0)
    .ser(se_GetAccessKeyLastUsedCommand)
    .de(de_GetAccessKeyLastUsedCommand)
    .build() {
}
