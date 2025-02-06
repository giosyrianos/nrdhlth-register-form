<template>
  <provet-stack style="max-width: 340px; margin: var(--n-space-xl) auto">
  <provet-banner shadow variant="danger">Doesn't work, just for show 🧑‍🎨 🎨 🖼️</provet-banner>
    <provet-card padding="l">
      <h1 slot="header">Sign up</h1>
      <form action="#">
        <provet-stack>
          <provet-input
            label="Name"
            expand
            required
            hide-required
            name="username"
            type="email"
            error
            placeholder="user@example.com"
          ></provet-input>
          <provet-input
            label="Password"
            expand
            required
            hide-required
            name="password"
            type="password"
            placeholder="••••••••"
          >
          </provet-input>
          <provet-button type="submit" expand variant="primary"
            >Sign in</provet-button
          >
        </provet-stack>
      </form>
    </provet-card>
  </provet-stack>
</template>

<script>
</script>