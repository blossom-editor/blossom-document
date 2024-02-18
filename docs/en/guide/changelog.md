# Version Release

## Version Control Explanation

Due to the Blossom code repository containing multi-platform code, it does not strictly follow semantic versioning. However, versions still have clear meanings:

- **Major Version `(v1.x.x)`**: Change in major version indicates a significant architectural overhaul, major feature changes, or significant incompatible modifications.

- **Minor Version `(v1.2.x)`**: Change in minor version indicates modifications to server-side code, requiring a redeployment of server-side code.

- **Patch Version `(v1.2.1)`**: Change in patch version indicates modifications on the client or blog side. Only requires redownloading the client or blog. Different patch versions of the client use the same server-side version, for example, both client versions `v1.2.1` and `v1.2.2` use the server-side version `v1.2.0`.

:::danger Note
If you are using a client and blog integrated with the backend, you need to redeploy regardless of the version change.
:::

<br/><br/><br/><br/><br/>

# Version Update Log

## v1.13.0 | 2024-02-08

**🌟 New Features**

1. Article sync scroll switch.
2. Always bottom out when editing.
3. Article jumps to bottom.
4. Customize the duration of temporary article access.
5. Drag the document menu list left and right.
6. The article toolbar displays functional prompts.
7. Blog topic style configuration([#83](https://github.com/blossom-editor/blossom/issues/83))。.
8. Blog font adjustment([#80](https://github.com/blossom-editor/blossom/issues/80)).
9. Customize the information at the bottom of the blog.
10. Milestones Indicates the number of tasks in each phase.
11. User Manage, delete, disable, and modify user types.
12. Multiple client Settings.

**🔧 Fixes**

1. base64 images are supported.
2. Count words when importing articles.
3. Effects of article renaming and deletion on double-linked charts.
4. Optimized the way the directory is constructed.
5. Menu items with secondary menus do not close when clicked.
6. Fix other known issues.

## v1.12.0 | 2024-01-11 🔍️

**🌟 New Features**

1. Full-text search functionality ([#33](https://github.com/blossom-editor/blossom/issues/33)).
2. New image access domain and blog address configuration.
3. Customization of blog styles in the client.
4. New display mode for web page bookmarks.
5. Changed the shortcut key to view pages.
6. Added validation for login address.

**🔧 Fixes**

1. Occasional errors during account creation and password modification ([#50](https://github.com/blossom-editor/blossom/issues/50)).
2. Rendering issue with Markdown `- []` ([#64](https://github.com/blossom-editor/blossom/issues/64)).
3. Scroll bar not returning to the top when switching blog articles ([#67](https://github.com/blossom-editor/blossom/issues/67)).
4. Fixed issues with image replacement.
5. Increased the length of image link fields.
6. Issue with repeating additions to the calendar plan.
7. Added validation for duplicate usernames.
8. Fixed other known issues.

:::danger ⚠️ Major Update
Changed the configuration method for image addresses. Please refer to [Upgrade to v1.12.0](./deploy/breakchange-1-12-0).
:::

> Thanks to [@Andecheal](https://github.com/Andecheal) for contributing to PR [(#54)](https://github.com/blossom-editor/blossom/pull/54)✨
>
> Thanks to [@T1anjiu](https://github.com/T1anjiu) for contributing to PR [(#73)](https://github.com/blossom-editor/blossom/pull/73)✨

## v1.11.0 | 2023-12-20

**🌟 New Features**

1. Window scaling functionality.
2. Password reset feature.

**🔧 Fixes**

1. Fixed an issue where HTML was displayed in the directory.
2. Fixed ID generation error caused by inability to obtain IP.
3. Fixed occasional editor crashes.
4. Fixed data synchronization issues that could occur when image uploads failed ([#48](https://github.com/blossom-editor/blossom/pull/48)).
5. Optimized tree structure creation ([#44](https://github.com/blossom-editor/blossom/pull/44)).

> Thanks to [@Andecheal](https://github.com/Andecheal) for contributing to PR [(#44)](https://github.com/blossom-editor/blossom/pull/44), [(#45)](https://github.com/blossom-editor/blossom/pull/45), [(#48)](https://github.com/blossom-editor/blossom/pull/48)✨

## v1.10.0 | 2023-12-16 📖

**🌟 New Features**

1. **The backend deployment will come with web version client and blog!** 🔥
2. Image transfer, batch image deletion functionality.
3. Refactored right-click menu in article editing, allowing for publicizing, bookmarking, setting as a topic, setting as a directory, and other operations.
4. Creation and renaming of folders and articles without opening a popup.
5. Articles are not checked for content during deletion, but are directly placed in the article recycle bin.
6. Can scroll the bottom of an article to the middle of the display area.
7. Added right-click menu in article editing for case conversion.
8. Standardized formatting for Katex.
9. Monthly word count statistics for articles.
10. Support for new syntax in Github references.
11. Configuration for authorization expiration time.
12. Added configuration option to reduce theme shadows.
13. Loading effect for buttons when saving data.
14. Collapse and expand functionality for web page bookmarks.

**🔧 Fixes**

1. Fixed an issue where the document list returned to the currently selected article after adding a new article ([#23](https://github.com/blossom-editor/blossom/issues/23)).
2. Removed background animation from the home page and to-do list.
3. Optimized dual-screen synchronized scrolling.

:::danger ⚠️ Non-Compatible Update Break Change
Changed the deployment method for the blog. Please refer to [Blog/Mobile Page Deployment](./deploy/blog).
:::

> Thanks to [@Acyco](https://github.com/Acyco) for contributing to PR [(#39)](https://github.com/blossom-editor/blossom/pull/39).
>
> Thanks to [@xiaowang0777](https://github.com/xiaowang0777) and many other users for long-term feedback.

## v1.9.0 | 2023-11-29

**🌟 New Features**

1. **Now you can deploy the client on the web**! 🔥
2. Home bookmarks and topics support switching between card and list styles.
3. Articles support sharing with a [temporary link](./article#temp-visit), with a validity period of 3 hours ([#27](https://github.com/blossom-editor/blossom/issues/27)).
4. New application launch loading page.
5. New default styles.
6. [**Blog**](./deploy/blog)**Supports login, viewing of non-public articles, viewing and editing schedules, to-dos, and notes. These features are mainly adapted for mobile devices**! 🔥
7. [**Blog**](./deploy/blog)Added some style configurations.
8. New [official documentation](https://www.wangyunf.com/blossom-doc/index.html).
9. Added server deployment configuration log.

**🔧 Fixes**

1. Fixed the display issue of daily plans in the plan.
2. Fixed issues related to login and password modification error messages.
3. Fixed other known issues.

## v1.8.1 | 2023-11-11

**🌟 New Features**

1. Support for changing the theme color.

**🔧 Fixes**

1. Fixed known issues.

## v1.8.0 | 2023-11-07

**🌟 New Features**

1. Document editor page now has a shortcut selection method for tags.
2. Document editor page has a shortcut to fill in image paths.
3. Document icons can now use image links.
4. Clicking on a double-link reference can now preview the content of the referenced article without opening a new window.
5. To-do list in daily to-dos now has a calendar display.
6. Added word count initialization functionality.
7. Added backend configuration for checking logs before startup.

**🔧 Fixes**

1. Fixed the issue where adding a new document would return the document list to the currently selected document ([#23](https://github.com/blossom-editor/blossom/issues/23)).
2. Removed the background animation from the home page and to-do list.
3. Optimized dual-screen synchronized scrolling.

## v1.7.2 | 2023-10-21

**🔧 Fixes**

1. Fixed an issue where selecting a line chart type in the traffic chart would crash.
2. Fixed the issue of repeating insertion of content when formatting the body.
3. Fixed the issue of not being able to select the last selected article after re-login.
4. Fixed Mac shortcut key issue.
5. Modified text content of the photo wall folder.
6. Fixed other known issues.

## v1.7.1 | 2023-10-19

**🌟 New Features**

1. Added configuration option: whether to automatically add suffix when uploading images.

**🔧 Fixes**

1. Fixed image upload path issue.
2. Fixed code block copy button position issue.
3. Removed the maximum height of code blocks on the blog page.
4. Display of article information when no article is selected on the blog page.
5. Blog page footer record number separator based on configuration display.
6. Copying code blocks on the blog page on mobile devices.

## v1.7.0 | 2023-10-15

**🌟 New Features**

1. Articles now support rendering titles as mind maps 🔥.
2. Support for displaying line numbers in code blocks, can be toggled on/off in settings.
3. Support for copying code blocks.
4. Support for pasting and uploading single or multiple images.
5. Support for dragging and dropping multiple images to upload.
6. Support for configuring the default language for code blocks.
7. Support for configuring whether to display special styles for topics.
8. Support for setting the client file upload volume limit.
9. Added a placeholder prompt when no article is selected.
10. Improved performance and experience for synchronized scrolling.
11. Optimized blog styles and configuration.
12. Changed the limit on the number of uploaded articles.
13. Fixed issues with image cache causing access problems for third-party image hosts.
14. Fixed other known issues.

## v1.6.0 | 2023-10-10 🍏

**🌟 New Features**

1. Support for the Mac client 🔥.
2. Quote blocks now support Github semantic syntax, see [An option to highlight a "Note" and "Warning" using blockquote](https://github.com/orgs/community/discussions/16925).
3. New folder will now default to having a folder icon.
4. Added a placeholder prompt when the document list is empty.
5. New image upload features: duplicate upload and cache refresh.
6. Clicking on an image in the article directory allows for image replacement and deletion in the preview.
7. Enriched display information for image previews.
8. Added expand and collapse functionality for to-do list statistics.
9. Added copy functionality for the icon list.
10. Home charts can now be scrolled.
11. Added homepage weather refresh functionality.
12. Server parameters can be configured in the settings page.

**🔧 Fixes**

1. Slightly increased font brightness in dark mode.
2. Fixed configuration issues when no weather is set.
3. Fixed upload image detection area issue for right-click in the editor.
4. Fixed other known issues.

## v1.5.0 | 2023-10-03 🔌

**🌟 New Features**

1. Added Docker deployment option, [check the documentation](./deploy/backend-docker)🔥.

```bash
docker pull jasminexzzz/blossom
```

**🔧 Fixes**

1. Optimized document sorting display.
2. Enhanced console tooltip interaction.
3. Changed image size limit to 50MB.
4. Fixed other known issues.

> Thanks to [@li-guohao](https://github.com/li-guohao) for contributing PR [(#4)](https://github.com/blossom-editor/blossom/pull/4).
>
> Thanks to [@nn200433](https://github.com/nn200433) for reporting issues.

## v1.4.1 | 2023-09-24

**🔧 Fixes**

1. Fixed known issues.
2. Removed unused images.

## v1.4.0 | 2023-09-23 🏷️

**🌟 New Features**

1. Added To-Do list functionality 🔥.
2. Multiple To-Do list statistics.
3. Support exporting multi-day To-Do items as Markdown files. You can record daily work in To-Do items and export them all at once as daily, weekly, or monthly reports.
4. Added new local token storage for login, defaulting to this method.

**🔧 Fixes**

1. Can download backups of any size.
2. Fixed an issue where modifying an article and saving immediately might not update article image references.
3. Removed image clarity option; images will now be displayed in their original form.
4. Changed login status style.
5. Added trial prompt at the bottom of the login page.
6. Moved the icon menu to the top right corner of the app.
7. Added a button in the top right corner of the app to set the window size to the optimal viewing experience.

## v1.3.0 | 2023-09-09

**🌟 New Features**

1. Added image drag-and-drop upload functionality in the editor, supporting simultaneous drag-and-drop of multiple files.
2. Added export to local Markdown①.
3. Added export to HTML.
4. Added export to local HTML①.
5. Added Pomodoro timer functionality.
6. Added menu font size configuration.
7. Added new icons.
8. Added server interface list monitoring to view traffic information for different interfaces.

> ①: Exporting locally means that image links will be modified to local links, and images will be exported locally along with the document. You can view them without an internet connection or directly in local editors like VS Code, Typora, etc.

**🔧 Fixes**

1. Optimized offset distance when synchronously scrolling on dual screens.
2. Enhanced code block style in night mode.
3. Stylistic improvements for the search page.
4. Stylistic improvements for the drag bar between the editor and preview.
5. Stylistic improvements for the blog.

## v1.2.0 | 2023-09-01

**🌟 New Features**

1. Right-click on a folder to choose to import articles, up to 20 at a time.
2. Right-click on a public article to generate a QR code, which can be scanned on mobile for viewing.
3. Added delete functionality for articles and folders.
4. Added view of article edit history.
5. Added an option to the note reference network to show or hide external link names to reduce visual clutter in large datasets.
6. View the reference network for a specific article.
7. The server will perform a full backup of articles every day at 7 a.m. You can view the backup list and download backup compressed packages on the client.
8. Added a back-to-top button.
9. Added editor font size settings.
10. Added drag functionality for the floating directory.
11. Can use the mouse to drag and adjust the width between the editor and preview sections.
12. Stylistic optimization for the blog page, supporting responsive design for better display on mobile.
13. Server, domain, certificate expiration time configuration can be viewed in Settings -> Server Configuration.

**🔧 Fixes**

1. Fixed an issue where specifying the image width would also set the maximum/minimum width.
2. Optimized offset distance when synchronously scrolling on dual screens.
3. Stylistic improvements for the note network.
4. Stylistic improvements for Markdown tables.
5. Fixed an issue where the right-click menu could not be clicked repeatedly.
6. Menu refactoring.

## v1.1.0 | 2023-08-15

**🌟 New Features**

1. Added support for LaTeX.
2. Added support for Mermaid.。
3. Added support for Markdown global formatting, shortcut `Shift + Alt + F`.

**🔧 Fixes**

1. Visual improvements for the current line style in dark mode.
2. Visual improvements for the selected line style in dark mode.
3. Visual improvements for the background color of the editor's top toolbar in dark mode.
4. Cursor color in dark mode.
5. Brightness of icons and emojis in the menu bar in dark mode.
6. In dark mode, the font color in the network of references.
7. Optimized the style of hljs code.
8. Shadow style optimization for calendar plan details in dark mode.
9. Other code optimizations.

## v1.0.0 | 2023-08-10 🎂

The first packaged release of Blossom.

**🌟 New Features**

📔 Markdown Notes

1. Bidirectional notes.
2. Public access to notes with online/offline permission control.
3. Categorization of note topics.
4. Markdown table formatting.

🌄 Photo Wall Management

1. Image hosting functionality.
2. Bulk image upload.
3. Screenshot feature (Windows only), automatically uploads screenshots.
4. Relationship between images and articles.

🎫 Sticky Notes

1. Linked with notes, serving as a "clipboard" for notes.

📅 Schedule Arrangement

1. Daily plans.
2. Daily schedules.

🔘 Other

1. Dark mode.
2. Public access to the blog.
3. Multi-user system.
4. Unlimited device synchronization.
5. Unlimited storage space.
6. Website bookmarking.
