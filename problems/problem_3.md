## I want to refactor a legacy system. You want to rewrite it from scratch. Argument. Then, switch our roles.

### Argument: Write the code from scratch

A complete refresh of the codebase can be a great exercise. Recreating an old system will force you to understand it inside-out, discovering its nuances, weaknesses and its strengths. You understand how it's been designed to work and how it is serving your clients. You probably have the roadmaps of the previous generation of the code and can predict the steps you need to retrace to get on par with the old system. It'll be easy to catch up to where the code is before the rewrite and make progress from there.

- Maybe the old code is written in a language for which there are fewer coders available and those who are, can be very expensive(demand and supply). You look inside the code and have no idea what you're looking at nor what you're looking for. But with amazing new-tech coders on the team, rewriting a legacy system to a new stack shouldn't be hard. Code get's old the moment you write it and being on the latest tech gives you a lot more opportunities as compared to being on aging code. New code on a new core with new design. You can't afford to do the switch in a refactor where you're forced to play around with the existing codebase/framework only.

- Maintaining the old code on outdated hardware is getting costly for the company and the _only_ logical solution to cut costs is to rewrite it in a newer tech stack to keep up with the times.

- Maybe the users are asking for new features that are simply not possible on the old system. Or maybe it is but the OG team isn't around anymore to tinker with it and support its development. With a fresh system in place, new features can be pumped out every weekend taking you way ahead of the competition.

Rewriting the code base is a fresh start without carrying over the previous technical debt and can be scaled better.

### Argument: Refactor the code.

Refactoring is a way of improving the existing code base by making small changes that do not affect your code's behaviour but also does not break it. A refactor allows you to slowly change and replace old code with new efficient ones on a gradual basis.

- You have all the tests from the old code in place for the new code to be put through so that no (client facing) feature is broken. You don't have to reinvent the wheel with the eventual replacement. That's mostly not the case with a rewrite where you'll have to write new tests for the corresponding code.

- The legacy code might have been there for years and probably has very little documentation. Throwing it all away will force you to remake the mistakes made previously, forcing more time, money and customer support into the project. Comparatively, a refactor won't have these problems as you are just building on top of existing bug fixes. This gives you good leverage to make the changes around the existing fixes and make them more efficient. Along the way, the documentation can be brought up to speed. Win-win.

- With a rewrite, you'll be playing catch-up for a long time. Sure, the codebase can be shiny on a new stack at the end of it but you're losing out on time and energy of everyone involved as well as the company, giving an unwanted headstart to your competitors.

- Since a refactor exercise can be a slow one, you will still be able to delegate a team to maintain the old base and attend to its needs while another works on the refactor. This way, the clients have no problem continuing to use the system while you build a new efficient one for them.

### Best of both

- The core features on your code CANNOT go offline. You'll lose clients and revenue flow. But you cannot stay on the stack much longer as it _really_ old and it does not make sense financially for your business.

- The [StranglerApplication](https://www.martinfowler.com/bliki/StranglerApplication.html) is a way of "strangling" old code, rewriting them and putting them to use when ready to replace. This reduces the risk of a full rewrite and its slow pace akin to that of refactoring (without breaking) enables you to incrementally replace parts of the system.
