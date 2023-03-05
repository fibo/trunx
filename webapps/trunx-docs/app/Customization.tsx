"use client"
import { Code, PageSection } from "@/components"

export default function Example() {
  return (
    <PageSection title="Customization">
      <p>Use Sass to customize your Bulma build to create your own theme.</p>

      <Code
        snippet={`
          npm install sass --save-dev
        `}
      />

      <p>
        Create, for example, a <em>_colors.scss</em> file like the following
      </p>

      <Code
        snippet={`
          $azure: hsl(180, 100%, 97%);
          $limegreen: hsl(120, 60%, 50%);
          $orangered: hsl(16, 100%, 50%);
          $skyblue: hsl(197, 71%, 73%);
          $steelblue: hsl(207, 44%, 49%);

          $body-background-color: $azure;

          $primary: $skyblue;

          $info: $steelblue;
          $success: $limegreen;
          $warning: hsl(48, 89%, 60%);
          $danger: $orangered;
        `}
      />

      <p>In your entry Sass file import customizations first and then Bulma.</p>

      <Code
        snippet={`
          /* Import custom variables first. */
          @import "colors";
          /* Import all bulma modules. */
          @import "bulma/bulma";
        `}
      />
    </PageSection>
  )
}
