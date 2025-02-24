import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateLoginProfileRequestFilterSensitiveLog } from "../models/models_1";
import { de_UpdateLoginProfileCommand, se_UpdateLoginProfileCommand } from "../protocols/Aws_query";
export { $Command };
export class UpdateLoginProfileCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSIdentityManagementV20100508", "UpdateLoginProfile", {})
    .n("IAMClient", "UpdateLoginProfileCommand")
    .f(UpdateLoginProfileRequestFilterSensitiveLog, void 0)
    .ser(se_UpdateLoginProfileCommand)
    .de(de_UpdateLoginProfileCommand)
    .build() {
}
