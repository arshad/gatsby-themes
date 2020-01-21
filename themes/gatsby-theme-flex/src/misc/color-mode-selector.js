/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { useThemeUI } from "theme-ui"
import { Select } from "@theme-ui/components"
import { startCase } from "lodash"
import Button from "../components/button"

export default React.forwardRef(({ style }, ref) => {
  const {
    theme: {
      initialColorMode,
      colors: { modes },
    },
    colorMode,
    setColorMode,
  } = useThemeUI()

  if (!modes) {
    return null
  }

  const colorModes = [initialColorMode, ...Object.keys(modes)]

  if (colorModes.length === 2) {
    const nextColorMode = colorModes.filter(mode => mode !== colorMode).pop()
    return (
      <Button
        ref={ref}
        sx={{
          variant: `buttons.tertiary`,
          ...style,
          p: 0,
          fontSize: 1,
          color: `text`,
        }}
        onClick={() => setColorMode(nextColorMode)}
        aria-label="Toggle color mode"
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 32 32"
          fill="currentColor"
        >
          <path d="M16 8c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM16 21v-10c2.757 0 5 2.243 5 5s-2.243 5-5 5zM16 26c1.105 0 2 0.895 2 2v2c0 1.105-0.895 2-2 2s-2-0.895-2-2v-2c0-1.105 0.895-2 2-2zM16 6c-1.105 0-2-0.895-2-2v-2c0-1.105 0.895-2 2-2s2 0.895 2 2v2c0 1.105-0.895 2-2 2zM30 14c1.105 0 2 0.895 2 2s-0.895 2-2 2h-2c-1.105 0-2-0.895-2-2s0.895-2 2-2h2zM6 16c0 1.105-0.895 2-2 2h-2c-1.105 0-2-0.895-2-2s0.895-2 2-2h2c1.105 0 2 0.895 2 2zM25.899 23.071l1.414 1.414c0.781 0.781 0.781 2.047 0 2.828s-2.047 0.781-2.828 0l-1.414-1.414c-0.781-0.781-0.781-2.047 0-2.828s2.047-0.781 2.828 0zM6.101 8.929l-1.414-1.414c-0.781-0.781-0.781-2.047 0-2.828s2.047-0.781 2.828 0l1.414 1.414c0.781 0.781 0.781 2.047 0 2.828s-2.047 0.781-2.828 0zM25.899 8.929c-0.781 0.781-2.047 0.781-2.828 0s-0.781-2.047 0-2.828l1.414-1.414c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-1.414 1.414zM6.101 23.071c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-1.414 1.414c-0.781 0.781-2.047 0.781-2.828 0s-0.781-2.047 0-2.828l1.414-1.414z" />
        </svg>
      </Button>
    )
  }

  return (
    <Select
      ref={ref}
      sx={{
        py: 0,
        fontSize: [2],
        ...style,
      }}
      defaultValue={colorMode}
      onChange={event => setColorMode(event.target.value)}
    >
      {colorModes.map(mode => (
        <option key={mode} value={mode}>
          {startCase(mode)}
        </option>
      ))}
    </Select>
  )
})