ServerEvents.recipes(event => {
    // Xóa công thức chế tạo cũ của Giáp WOM (Mask, Manicle, Chains, Belt)
    event.remove({ output: 'wom:netherite_mask' })
    event.remove({ output: 'wom:netherite_manicle' })
    event.remove({ output: 'wom:netherite_chains' })
    event.remove({ output: 'wom:netherite_belt' })
})
