
# SimplePlaylistMusicPlayer
A simple HTML 5 music player. 
## Example
```html
<div class="spmp-container" style="width: 300px; visibility: hidden;">
  <a href="./file1.mp3">First Song</a>
  <a href="./file2.mp3">Second Song</a>
  <a href="./file3.mp3">Third Song</a>
</div>
<script src="./spmp.js" type="text/javascript"></script>
```
   > **Styles:** Set the width in the style tag of each container, removing it will fill the player's width to the parent. Set visibility to hidden this stops the player being visible until the player is ready, at which point visibility is set to visible.
   > **Note:** If the webpage contains multiple players make sure that the script is after the last container.
   
## Classes
|Class|Description|
|-----|-----|
|`spmp-container`|This class identifies the container of each player.|
|`autoplay`|Automatically start playing when the page loads. Must be enabled in browser settings.|
|`loop`|When the last track has finished playing start playing the first.|
|`preload`|Preloads the next track when the current has 10 seconds left.|
|`spmp-custom`|Disables the colours, use this with custom styles.|
## Custom Styles
```html
<style>
  .spmp-container {
    color: #fff;
    fill: #fff;
  }
  #spmp-vol-fill, #spmp-prog-fill {
    background-color: #000;
  }
  .spmp-b:hover, #spmp-vol-bar, #spmp-prog-bar {
    background-color: #f8ffff;
  }
  .spmp-track:hover {
    background-color: #000;
  }
  #spmp-prog-buffer {
    background-color: #eee;
  }
  #spmp-playlist, #spmp-vol, #spmp-prog, .spmp-b {
    background-color: #30F;
  }
</style>
```
> **Note:** Inset this code above the player containers.
> The styled colours will only apply if the `spmp-custom` class is present in the container.
