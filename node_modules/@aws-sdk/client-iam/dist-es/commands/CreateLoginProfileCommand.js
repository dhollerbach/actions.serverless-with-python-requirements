import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateLoginProfileRequestFilterSensitiveLog, } from "../models/models_0";
import { de_CreateLoginProfileCommand, se_CreateLoginProfileCommand } from "../protocols/Aws_query";
export { $Command };
export class CreateLoginProfileCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSIdentityManagementV20100508", "CreateLoginProfile", {})
    .n("IAMClient", "CreateLoginProfileCommand")
    .f(CreateLoginProfileRequestFilterSensitiveLog, void 0)
    .ser(se_CreateLoginProfileCommand)
    .de(de_CreateLoginProfileCommand)
    .build() {
}
