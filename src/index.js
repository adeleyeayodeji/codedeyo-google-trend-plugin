import { registerBlockType } from "@wordpress/blocks";
import { TextControl } from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import { useEntityProp } from "@wordpress/core-data";
import { useBlockProps } from "@wordpress/block-editor";
import "./style.scss";

registerBlockType("codedeyogoogletrends/meta-block", {
  title: "Google Trends Widget",
  edit: ({ setAttributes, attributes }) => {
    const blockProps = useBlockProps();
    return (
      <div {...blockProps}>
        <p>This widget is not available yet, please check back later</p>
      </div>
    );
  },

  // No information saved to the block.
  // Data is saved to post meta via the hook.
  save: () => {
    return null;
  }
});
