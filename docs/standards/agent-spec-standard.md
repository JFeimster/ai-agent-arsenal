# Agent Spec Standard

> Source: JFeimster/ai-agent-library. Imported/adapted for ai-agent-arsenal.


Each agent file in this library is designed to be usable as a source spec for multiple platforms.

## Required Sections

Agent specs must include the following sections to maintain consistency and usefulness:

- **Productized agent concept:** A clear title and short description of what the agent does.
- **Buyer:** The target audience or user for this agent.
- **Pain solved:** The specific problem the agent addresses.
- **Monetization path:** How the agent can generate revenue or provide tangible value.
- **Agent bio / description:** A detailed explanation of the agent's persona and function.
- **Best-fit use cases:** Situations where the agent excels.
- **Suggested instructions:** Core prompts or system instructions.
- **Rules and guardrails:** Limitations and constraints to keep the agent focused and safe.
- **Conversation starters:** Examples of how a user might interact with the agent.
- **Prompt library:** A collection of reusable prompts.
- **Recommended knowledge-base files:** Context documents the agent needs to perform well.
- **Integrations / connectors:** Services or APIs the agent should connect to.
- **Suggested Notion database properties:** If deployed in Notion, the required fields/properties.
- **Packaging angle:** How to market or bundle the agent.
- **Success criteria:** How to measure if the agent is performing its job successfully.
- **Future platform expansion notes:** Ideas for adapting the agent to other platforms (e.g., ChatGPT, Claude).

## Frontmatter Format

Agents should include a YAML frontmatter block for metadata indexing:

```yaml
---
title: "Agent Name"
slug: "agent-slug"
agent_platform: "Notion AI"
category: "Category Name"
buyer: "Target Buyer"
pain_solved: "Pain description"
monetization: "Monetization path"
created: "YYYY-MM-DD"
status: "draft"
version: "1.0"
---
```
